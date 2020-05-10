const PALLETE = {
  black: ['#0D0D0D', '#262626', '#404040', '#595959', '#8C8C8C'],
  white: ['#fff', '#FAFAFA', '#F2F2F2', '#BFBFBF', '#A6A6A6'],
  // red:     ['#E55039', '#FF9F1C', '#FDCB6E', '#FFEAA7'],
  // green:   ['#16593A', '#07A785', '#02C39A', '#BCFFDB'],
  // blue:    ['#0C2461', '#4A69BD', '#6A89CC', '#A6B8E0'],
  red: ['#E55039', '#FF9F1C', '#FFEAA7'],
  green: ['#16593A', '#02C39A', '#BCFFDB'],
  blue: ['#0C2461', '#6A89CC', '#A6B8E0', 'rgba(166, 184, 224, 0.3)'],
  indigo: ['#2D132C', '#9A8C98', '#FEF4EF', 'rgba(45, 19, 44, 0.05)'],
  violet: ['#431C5D', '#6F7BBF', '#D8DCFF']
};

export default {
  colors: {
    ...PALLETE,
    primary: PALLETE.indigo[0],
    secondary: PALLETE.indigo[2],
    text: PALLETE.black[0],
    light: PALLETE.black[3],
    field: PALLETE.black[1],
    label: PALLETE.black[2],
    error: PALLETE.red[0],
    success: PALLETE.green[1],
    warning: PALLETE.indigo[1],
    disabled: PALLETE.white[2],
    loading: PALLETE.black[4],
    background: PALLETE.white[0]
  }
};
