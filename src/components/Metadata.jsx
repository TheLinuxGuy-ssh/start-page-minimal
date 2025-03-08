import { Helmet } from "react-helmet";
import { Meta } from "../assets/config";


const Metadata = () => {
    return (
            <Helmet>
                <title>{Meta.title}</title>
                <link rel="shortcut icon" href={Meta.iconurl} type="image/x-icon" />
                <link rel="icon" type="image/svg+xml" href={Meta.iconurl} />
            </Helmet>
    )
}

export default Metadata;