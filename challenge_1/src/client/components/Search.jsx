import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null
    };

  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      form: e.target.value}
    );
  }

  render() {
    return (
      <div>
        asf
        <form>
          <label>
            Search
            <input type='text' value={this.state.value} onChange={this.onChange.bind(this)} />
          </label>
        </form>
      </div>
    )
  }
}

export default Search;

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>