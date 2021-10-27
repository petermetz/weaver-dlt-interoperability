pub mod relay {
    pub mod datatransfer {
        include!(concat!("../proto-rs", "/datatransfer.rs"));
    }
}
pub mod networks {
    pub mod networks {
        include!(concat!("../proto-rs", "/networks.rs"));
    }
}
pub mod driver {
    pub mod driver {
        include!(concat!("../proto-rs", "/driver.rs"));
    }
}

pub mod common {
    pub mod ack {
        include!(concat!("../proto-rs", "/ack.rs"));
    }
    pub mod state {
        include!(concat!("../proto-rs", "/state.rs"));
    }
    pub mod query {
        include!(concat!("../proto-rs", "/query.rs"));
    }
}
