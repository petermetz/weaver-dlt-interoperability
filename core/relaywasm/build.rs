// use std::env;

// fn main() -> Result<(), Box<dyn std::error::Error>> {
//     env::set_var("OUT_DIR", "proto-rs/");
//     tonic_build::configure()
//         .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
//         .compile(
// &[
//     "protos/relay/datatransfer.proto",
//     "protos/networks/networks.proto",
//     "protos/driver/driver.proto",
// ],
//             &["protos"],
//         )?;
//     Ok(())
// }

extern crate protoc_rust;

use protoc_rust::Customize;

fn main() {
    protoc_rust::Codegen::new()
        .out_dir("proto-rs/")
        .inputs(&[
            "protos/common/ack.proto",
            "protos/common/query.proto",
            "protos/common/state.proto",
            "protos/relay/datatransfer.proto",
            "protos/networks/networks.proto",
            "protos/driver/driver.proto",
        ])
        .include("protos")
        .run()
        .expect("protoc");
}

// protoc_rust::Args::new()
//     ...
//     .customize(Customize {
//         serde_derive: Some(true),
//         ..Default::default()
//     })
//     .run()?;
