import { withPluginApi } from "discourse/lib/plugin-api"

function initIcons(api) {
  api.replaceIcon("address-book", "perm_contact_calendar")
  api.replaceIcon("adjust", "adjust")
  api.replaceIcon("ambulance", "medical_services")
  api.replaceIcon("anchor", "anchor")
  api.replaceIcon("angle-double-down", "keyboard_double_arrow_down")
  api.replaceIcon("angle-double-left", "keyboard_double_arrow_left")
  api.replaceIcon("angle-double-right", "keyboard_double_arrow_right")
  api.replaceIcon("angle-double-up", "keyboard_double_arrow_up")
  api.replaceIcon("angle-down", "keyboard_arrow_down")
  api.replaceIcon("angle-left", "keyboard_arrow_left")
  api.replaceIcon("angle-right", "keyboard_arrow_right")
  api.replaceIcon("angle-up", "keyboard_arrow_up")
  api.replaceIcon("archive", "inventory_2")
  api.replaceIcon("arrow-down", "arrow_downward")
  api.replaceIcon("arrow-left", "arrow_back")
  api.replaceIcon("arrow-right", "arrow_forward")
  api.replaceIcon("arrow-up", "arrow_upward")
  api.replaceIcon("arrows-alt-h", "sync_alt")
  api.replaceIcon("arrows-alt-v", "height")
  api.replaceIcon("asterisk", "emergency")
  api.replaceIcon("at", "alternate_email")
  api.replaceIcon("backward", "fast_rewind")
  api.replaceIcon("ban", "block")
  api.replaceIcon("bars", "menu")
  api.replaceIcon("bed", "bed")
  api.replaceIcon("bell", "notifications")
  api.replaceIcon("bell-slash", "notifications_off")
  api.replaceIcon("birthday-cake", "cake")
  api.replaceIcon("bold", "format_bold")
  api.replaceIcon("book", "book")
  api.replaceIcon("book-reader", "local_library")
  api.replaceIcon("bookmark", "bookmark")
  api.replaceIcon("briefcase", "business_center")
  api.replaceIcon("calendar-alt", "calendar_month")
  api.replaceIcon("caret-down", "arrow_drop_down")
  api.replaceIcon("caret-left", "arrow_left")
  api.replaceIcon("caret-right", "arrow_right")
  api.replaceIcon("caret-up", "arrow_drop_up")
  api.replaceIcon("certificate", "school")
  api.replaceIcon("chart-bar", "insert_chart")
  api.replaceIcon("chart-pie", "pie_chart")
  api.replaceIcon("check", "check")
  api.replaceIcon("check-circle", "check_circle")
  api.replaceIcon("check-square", "check_box")
  api.replaceIcon("chevron-down", "expand_more")
  api.replaceIcon("chevron-left", "chevron_left")
  api.replaceIcon("chevron-right", "chevron_right")
  api.replaceIcon("chevron-up", "expand_less")
  api.replaceIcon("circle", "lens")
  api.replaceIcon("code", "code")
  api.replaceIcon("cog", "settings")
  api.replaceIcon("columns", "view_column")
  api.replaceIcon("comment", "comment")
  api.replaceIcon("comment-slash", "comments_disabled")
  api.replaceIcon("comments", "forum")
  api.replaceIcon("compress", "compress")
  api.replaceIcon("copy", "content_copy")
  api.replaceIcon("credit-card", "credit_card")
  api.replaceIcon("crosshairs", "my_location")
  api.replaceIcon("cube", "view_in_ar")
  api.replaceIcon("desktop", "desktop_windows")
  api.replaceIcon("discourse-bell-exclamation", "notification_important")
  api.replaceIcon("discourse-bell-one", "notifications")
  api.replaceIcon("discourse-bell-slash", "notifications_off")
  api.replaceIcon("discourse-compress", "close_fullscreen")
  api.replaceIcon("discourse-emojis", "emoji_emotions")
  api.replaceIcon("discourse-expand", "open_in_full")
  api.replaceIcon("discourse-other-tab", "tab_unselected")
  api.replaceIcon("download", "file_download")
  api.replaceIcon("ellipsis-h", "more_horiz")
  api.replaceIcon("ellipsis-v", "more_vert")
  api.replaceIcon("envelope", "mail")
  api.replaceIcon("envelope-square", "mail")
  api.replaceIcon("exchange-alt", "sync_alt")
  api.replaceIcon("exclamation-circle", "error")
  api.replaceIcon("exclamation-triangle", "warning")
  api.replaceIcon("external-link-alt", "launch")
  api.replaceIcon("fab-android", "android")
  api.replaceIcon("far-bell", "notifications")
  api.replaceIcon("far-bell-slash", "notifications_off")
  api.replaceIcon("far-calendar-plus", "insert_invitation")
  api.replaceIcon("far-chart-bar", "assessment")
  api.replaceIcon("far-check-square", "check_box")
  api.replaceIcon("far-circle", "circle")
  api.replaceIcon("far-clipboard", "content_paste")
  api.replaceIcon("far-clock", "schedule")
  api.replaceIcon("far-comment", "comment")
  api.replaceIcon("far-comments", "forum")
  api.replaceIcon("far-copyright", "copyright")
  api.replaceIcon("far-credit-card", "credit_card")
  api.replaceIcon("far-dot-circle", "radio_button_checked")
  api.replaceIcon("far-edit", "edit")
  api.replaceIcon("far-envelope", "mail")
  api.replaceIcon("far-eye", "visibility")
  api.replaceIcon("far-eye-slash", "visibility_off")
  api.replaceIcon("far-file-alt", "description")
  api.replaceIcon("far-frown", "sentiment_dissatisfied")
  api.replaceIcon("far-heart", "favorite_border")
  api.replaceIcon("far-image", "image")
  api.replaceIcon("far-list-alt", "list_alt")
  api.replaceIcon("far-meh", "sentiment_neutral")
  api.replaceIcon("far-moon", "dark_mode")
  api.replaceIcon("far-smile", "sentiment_satisfied")
  api.replaceIcon("far-square", "square")
  api.replaceIcon("far-star", "star_outline")
  api.replaceIcon("far-sun", "light_mode")
  api.replaceIcon("far-thumbs-down", "thumb_down")
  api.replaceIcon("far-thumbs-up", "thumb_up")
  api.replaceIcon("far-trash-alt", "delete")
  api.replaceIcon("file", "insert_drive_file")
  api.replaceIcon("file-alt", "description")
  api.replaceIcon("file-audio", "audio_file")
  api.replaceIcon("file-image", "insert_photo")
  api.replaceIcon("file-invoice", "receipt_long")
  api.replaceIcon("file-video", "video_file")
  api.replaceIcon("filter", "filter_alt")
  api.replaceIcon("flag", "flag")
  api.replaceIcon("folder", "folder")
  api.replaceIcon("folder-open", "folder_open")
  api.replaceIcon("forward", "fast-forward")
  api.replaceIcon("gavel", "gavel")
  api.replaceIcon("globe", "language")
  api.replaceIcon("globe-americas", "public")
  api.replaceIcon("hand-point-right", "arrow_right_alt")
  api.replaceIcon("hands-helping", "handshake")
  api.replaceIcon("hashtag", "tag")
  api.replaceIcon("heart", "favorite")
  api.replaceIcon("history", "history")
  api.replaceIcon("home", "home")
  api.replaceIcon("hourglass-start", "hourglass_top")
  api.replaceIcon("id-card", "badge")
  api.replaceIcon("image", "panorama")
  api.replaceIcon("inbox", "inbox")
  api.replaceIcon("info-circle", "info")
  api.replaceIcon("italic", "format_italic")
  api.replaceIcon("key", "key")
  api.replaceIcon("keyboard", "keyboard")
  api.replaceIcon("layer-group", "layers")
  api.replaceIcon("link", "link")
  api.replaceIcon("list", "list")
  api.replaceIcon("list-ol", "format_list_numbered")
  api.replaceIcon("list-ul", "format_list_bulleted")
  api.replaceIcon("lock", "lock")
  api.replaceIcon("magic", "auto_fix_normal")
  api.replaceIcon("map-marker-alt", "location_on")
  api.replaceIcon("microphone-slash", "mic_off")
  api.replaceIcon("minus", "remove")
  api.replaceIcon("minus-circle", "remove_circle")
  api.replaceIcon("mobile-alt", "phone_iphone")
  api.replaceIcon("moon", "dark_mode")
  api.replaceIcon("paint-brush", "brush")
  api.replaceIcon("paper-plane", "send")
  api.replaceIcon("pause", "pause")
  api.replaceIcon("pencil-alt", "edit")
  api.replaceIcon("play", "play_arrow")
  api.replaceIcon("plug", "power")
  api.replaceIcon("plus", "add")
  api.replaceIcon("plus-circle", "add_circle")
  api.replaceIcon("plus-square", "add_box")
  api.replaceIcon("power-off", "power_settings_new")
  api.replaceIcon("puzzle-piece", "extension")
  api.replaceIcon("question", "question_mark")
  api.replaceIcon("question-circle", "help_outline")
  api.replaceIcon("random", "shuffle")
  api.replaceIcon("redo", "redo")
  api.replaceIcon("reply", "reply")
  api.replaceIcon("rocket", "rocket_launch")
  api.replaceIcon("save", "save")
  api.replaceIcon("search", "search")
  api.replaceIcon("share", "ios_share")
  api.replaceIcon("shield", "shield")
  api.replaceIcon("sign-in-alt", "login")
  api.replaceIcon("sign-out-alt", "logout")
  api.replaceIcon("signal", "signal_cellular_alt")
  api.replaceIcon("sliders", "tune")
  api.replaceIcon("sort", "sort")
  api.replaceIcon("spinner", "pending")
  api.replaceIcon("square-full", "square")
  api.replaceIcon("star", "star")
  api.replaceIcon("step-backward", "skip_previous")
  api.replaceIcon("step-forward", "skip_next")
  api.replaceIcon("stream", "clear_all")
  api.replaceIcon("sync", "sync")
  api.replaceIcon("sync-alt", "sync")
  api.replaceIcon("table", "table_chart")
  api.replaceIcon("tag", "sell")
  api.replaceIcon("tags", "sell")
  api.replaceIcon("tasks", "checklist")
  api.replaceIcon("thermometer-three-quarters", "device_thermostat")
  api.replaceIcon("thumbs-down", "thumb_down")
  api.replaceIcon("thumbs-up", "thumb_up")
  api.replaceIcon("thumbtack", "push_pin")
  api.replaceIcon("times", "close")
  api.replaceIcon("times-circle", "highlight_off")
  api.replaceIcon("toggle-off", "toggle_off")
  api.replaceIcon("toggle-on", "toggle_on")
  api.replaceIcon("trash-alt", "delete")
  api.replaceIcon("undo", "undo")
  api.replaceIcon("unlink", "link_off")
  api.replaceIcon("unlock", "lock_open")
  api.replaceIcon("unlock-alt", "lock_open")
  api.replaceIcon("upload", "file_upload")
  api.replaceIcon("wrench", "build")
}

export default {
  name: "google-material-icons",
  initialize() {
    withPluginApi("0.10.1", initIcons);
  },
};