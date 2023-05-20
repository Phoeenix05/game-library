#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

async fn fetch_url() -> Result<String, reqwest::Error> {
  
}

#[tauri::command]
fn fetch_game(id: i64) -> String {
  if let Ok(res) = fetch_url() {
    res
  } else {
    "Error occurred".into()
  }
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![fetch_game])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
