import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

import makeStyles from "./style";

function Article({ article, hidden, showTitle }) {
  const classes = makeStyles();
  let comments;
  if (article.comments) {
    comments = (<p><span>Comments</span>
                  <Link color="secondary" target="_blank"
                    key={`ac-${article.id}`} href={article.comments}>
                    {article.comments}
                  </Link></p>);
  }
  return (
    <div hidden={hidden} className={classes.article}>
      <h1 hidden={!showTitle}>{article.title}</h1>
      <p>
        <span>Link</span>
        <Link color="secondary" target="_blank"
          key={`al-${article.id}`} href={article.link}>
          {article.link}
        </Link>
      </p>
      {comments}
      <Divider />
      <div className={classes.articleInner}>
        <Typography
          dangerouslySetInnerHTML={{__html: article.content}}
        />
      </div>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.string,
  }),
  showTitle: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default Article;
