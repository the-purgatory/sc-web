import * as core from '@actions/core'
import * as github from '@actions/github'
import { Context } from '@actions/github/lib/context'
import matcher from 'matcher'
import getConfig from './utils/config'
import { RepoInfo } from './utils/config'

const defaultConfig = {
  feature: ['feature/*', 'feat/*'],
  fix: 'fix/*',
  chore: 'chore/*',
}

async function action(context: Pick<Context, 'payload'> = github.context) {
  try {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN!
    const octokit = new github.GitHub(GITHUB_TOKEN)
    const repoInfo: RepoInfo = {
      owner: context.payload.repository!.owner.login,
      repo: context.payload.repository!.name,
    }
    const configPath = core.getInput('configuration-path', { required: true })

    if (!context.payload.pull_request) {
      throw new Error(
        "Payload doesn't contain `pull_request`. Make sure this Action is being triggered by a pull_request event (https://help.github.com/en/articles/events-that-trigger-workflows#pull-request-event-pull_request)."
      )
    }

    const ref: string = context.payload.pull_request.head.ref
    const config = await getConfig(octokit, configPath, repoInfo, ref, defaultConfig)

    const labelsToAdd = Object.entries(config).reduce((labels, [label, patterns]) => {
      if (
        Array.isArray(patterns)
          ? patterns.some((pattern) => matcher.isMatch(ref, pattern))
          : matcher.isMatch(ref, patterns)
      ) {
        labels.push(label)
      }

      return labels
    }, [] as string[])

    if (labelsToAdd.length > 0) {
      await octokit.issues.addLabels({
        number: context.payload.pull_request.number,
        labels: labelsToAdd,
        ...repoInfo,
      })
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'test') {
      throw error
    }

    core.error(error)
    core.setFailed(error.message)
  }
}

export default action
