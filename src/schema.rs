table! {
    links (id) {
        id -> Text,
        url -> Text,
        timestamp -> Text,
    }
}

table! {
    history (id) {
        id -> Text,
        status -> Text,
    }
}