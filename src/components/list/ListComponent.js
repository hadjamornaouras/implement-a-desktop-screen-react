import React, { PureComponent } from "react";
import { getAsync } from "../../backend/api";
import "./ListComponent.scss";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import StarIcon from "@material-ui/icons/Star";
import CloseIcon from "@material-ui/icons/Close";

class ListComponent extends PureComponent {
  state = {
    list: [],
    start: 12,
    limit: 5,
    progress: true,
    message: false,
    starts: 5
  };
  async componentDidMount() {
    const { start, limit } = this.state;
    let data = await getAsync(start, limit);
    this.setState({ list: data }, () => this.setState({ progress: false }));
  }
  handleStarNumber(item) {
    var indents = [];
    for (let i = 0; i < (item.id % this.state.starts) + 1; i++) {
      indents.push(
        <li className="starts_number" key={i}>
          <StarIcon />
        </li>
      );
    }
    return indents;
  }
  handleStar(item) {
    var indents = [];
    for (let i = 0; i < 5 - ((item.id % this.state.starts) + 1); i++) {
      indents.push(
        <li className="starts" key={i}>
          <StarIcon />
        </li>
      );
    }
    return indents;
  }
  handleDelete = item => {
    let data = this.state.list.filter(res => res !== item);
    this.setState(
      { list: data },
      () => !this.state.list.length && this.setState({ message: true })
    );
  };
  render() {
    const { list, progress, message } = this.state;
    return (
      <div className="container-list">
        <h1>Votre bilan assurance</h1>
        <div className="text">
          <p>
            vous trouverez ci-dessous un récapitulatif de votre bilan .Pour
            savoir sur quels{" "}
          </p>
          <p>
            critères notre évaluation c'est porté , cliqué sur une des garanties{" "}
          </p>
        </div>

        <div className="content">
          {list && list.length ? (
            <Card className="mat-card">
              {list.map((item, key) => (
                <div className="card" key={key}>
                  <div className="title">
                    <span> {item.title}</span>
                  </div>
                  <div className="right">
                    <ul>
                      {this.handleStarNumber(item)}
                      {this.handleStar(item)}
                    </ul>
                    <span
                      className="close"
                      onClick={() => this.handleDelete(item)}
                    >
                      <CloseIcon />
                    </span>
                  </div>
                </div>
              ))}
            </Card>
          ) : (
            progress && <CircularProgress />
          )}
          {message && (
            <Card className="message">
              <h3>Empty list</h3>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

export default ListComponent;
