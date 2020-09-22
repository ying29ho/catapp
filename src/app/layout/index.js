import React from "react";

import AppRouter from "./AppRouter";

/**
 * This is the layout of the page. As this is simple there is only content,
 * however in a more complex application you'd have a Header, Footer, Sidebar
 * etc on this level, as only the actual page content would need to change
 * based on routing.
 */
const Layout = () => <AppRouter />;

export default Layout;
