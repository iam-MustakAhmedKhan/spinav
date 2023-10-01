import { LazyMotion, domAnimation } from "framer-motion";

// Load only the domAnimation package
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    );
}

export default Layout