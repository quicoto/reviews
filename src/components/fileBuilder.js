import React from "react"
import { StaticQuery, graphql } from "gatsby"
const slugify = require("@sindresorhus/slugify")

export default class FileBuilder extends React.Component {
  state = {
    comment: "",
    episode: "",
    markdown: "",
    rating: "3",
    season: "",
    show: "",
    share: "0",
  }

  prepareMarkdown(state) {
    const now = new Date()
    let month = now.getMonth() + 1
    if (month < 10) month = `0${month}`
    const date = `${now.getFullYear()}-${month}-${now.getDate()}T${now.getHours()}:${now.getMinutes()}:00`
    const defaultComment = "*[No review was written for this episode]*"
    let rating = ""

    for (let i = 0; i < +state.rating; i++) {
      rating += "⭐️"
    }

    return `---
type: series
title: "${state.show} ${state.season}x${state.episode}"
date: "${date}"
name: "${state.show}"
season: ${+state.season}
episode: ${+state.episode}
rating: ${+state.rating}
ratingEmoji: "${rating}"
share: ${state.share === "1" ? "true" : "false"}
---

${state.comment ? state.comment : defaultComment}`
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onClick = event => {
    event.preventDefault()
    const el = document.querySelector('[name="markdown"]')
    el.select()
    document.execCommand("copy")
  }
  render() {
    function Item(props) {
      const name = props.nodes[0].frontmatter.name
      return <option value={name}>{name}</option>
    }

    return (
      <div>
        <form className="builder">
          <div className="row">
            <label htmlFor="show" className="form-label">
              TV Shows
            </label>
            <select
              className="form-select"
              id="show"
              name="show"
              onChange={this.onChange}
              defaultValue={this.state.show}
            >
              <option value="">Select TV Show</option>
              <StaticQuery
                query={graphql`
                  {
                    allMarkdownRemark(
                      sort: {
                        order: [ASC, ASC]
                        fields: [frontmatter___season, frontmatter___episode]
                      }
                      filter: { frontmatter: { type: { eq: "series" } } }
                    ) {
                      group(field: frontmatter___name) {
                        nodes {
                          fields {
                            slug
                          }
                          frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            title
                            name
                            rating
                            season
                            episode
                          }
                          id
                        }
                        totalCount
                      }
                    }
                  }
                `}
                render={data => {
                  let nodes = JSON.parse(JSON.stringify(data, null, 4))
                    .allMarkdownRemark.group

                  return nodes.map((item, index) => (
                    <Item key={index.toString()} nodes={item.nodes} />
                  ))
                }}
              ></StaticQuery>
            </select>
          </div>
          <div className="row">
            <label htmlFor="Season" className="form-label">
              Season
            </label>
            <input
              id="Season"
              type="number"
              name="season"
              onChange={this.onChange}
            />
          </div>
          <div className="row">
            <label htmlFor="Episode" className="form-label">
              Episode
            </label>
            <input
              id="Episode"
              type="number"
              name="episode"
              onChange={this.onChange}
            />
          </div>
          <div className="row">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <select
              className="form-select"
              id="rating"
              onChange={this.onChange}
              name="rating"
              defaultValue={this.state.rating}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="row">
            <label htmlFor="Comment" className="form-label">
              Comment
            </label>
            <textarea
              className="form-control"
              id="Comment"
              rows="3"
              name="comment"
              onChange={this.onChange}
            ></textarea>
          </div>
          <div className="row">
            <label htmlFor="markdown" className="form-label">
              Markdown
            </label>
            <textarea
              readOnly
              className="form-control"
              id="markdown"
              rows="3"
              name="markdown"
              value={this.prepareMarkdown(this.state)}
            ></textarea>
          </div>
          <div className="row">
            <label htmlFor="share" className="form-label">
              Share
            </label>
            <select
              className="form-select"
              id="share"
              name="share"
              onChange={this.onChange}
              defaultValue={this.state.share}
            >
              <option value="0">False</option>
              <option value="1">True</option>
            </select>
          </div>
          <div className="actions">
            <button onClick={this.onClick}>Copy</button>
            <a
              href={`https://github.com/quicoto/reviews/new/master/content/blog/tv-shows/?filename=tv-shows/${slugify(
                this.state.show
              )}/${this.state.season}x${this.state.episode}/index.md`}
            >
              Create file on Github
            </a>
          </div>
        </form>
      </div>
    )
  }
}

// const FileBuilder = props => (

// )

// export default FileBuilder
