mod utils;
mod pb;

use wasm_bindgen::prelude::*;

// Internal generated modules
use crate::pb::common::ack::{ack, Ack};
use crate::pb::common::query::Query;
use crate::pb::common::state::{request_state, view_payload, RequestState, ViewPayload};
use crate::pb::driver::driver::driver_communication_client::DriverCommunicationClient;
use crate::pb::relay::datatransfer::data_transfer_client::DataTransferClient;
use crate::pb::relay::datatransfer::data_transfer_server::DataTransfer;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, relaywasm!");
}
