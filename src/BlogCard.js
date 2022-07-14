
import { dumpLogs } from "./Utils";

// import './BlogCard.css';

import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    dumpLogs(props);
    return (
    <div className={classes.BlogCard}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4>{props.id}</h4>
    </div>
    )
}

export default BlogCard;