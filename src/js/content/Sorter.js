import React  from 'react';               


class Sorter extends React.Component {
  constructor(props) {
    super(props);
    this.changeSort = this.changeSort.bind(this);
  }
  
  changeSort (e) {
    let params = this.props.context.state.queryParams;
    params.sortBy = e.target.value
    this.props.context.setState({queryParams: params});
    this.props.context.getData();
  }


  render () { 
  	return (
      <div className="product-catalogue__sort-by">
        <p className="sort-by">Сортировать</p>
        <select id="sorting" name="" onChange={this.changeSort}>
          <option value="price">по цене</option>
          <option value="popularity">по популярности</option>
        </select>
      </div> 
   )
 }

} 

export default Sorter;   