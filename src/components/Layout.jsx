import { LazyMotion, domAnimation } from "framer-motion";

// Load only the domAnimation package
function Layout({ children }) {
    return (
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    );
}

export default Layout