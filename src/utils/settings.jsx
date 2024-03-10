export const WebApp = window.Telegram.WebApp
export const tg_id = WebApp.initDataUnsafe.user.id.toString()
export const tg_user = WebApp.initDataUnsafe.user
export const theme = WebApp.themeParams

export const color = {
    bg: theme.bg_color,
    button: theme.button_color,
    button_text: theme.button_text_color,
    destructive: theme.destructive_text_color,
}

export const sizes = {
    gap_s: '8px',
    gap_m: '13px',
    gap_l: '20px',
}
