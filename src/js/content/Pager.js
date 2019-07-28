import React  from 'react';

class Pager extends React.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);

  }

  changePage (e) {
    let params = this.props.context.state.queryParams;
    params.page = parseInt(e.currentTarget.innerHTML);
    this.props.context.setState({queryParams: params});
    this.props.context.getData();    
  }

  nextPage (e) {
    let params = this.props.context.state.queryParams;
    if (params.page < this.props.pages) {
     params.page += 1 ;
     this.props.context.setState({queryParams: params});
     this.props.context.getData();    
    }
  }

  prevPage (e) {
    let params = this.props.context.state.queryParams;
    if (params.page > 1) {
     params.page -= 1 ;
     this.props.context.setState({queryParams: params});
     this.props.context.getData();    
    }
  }

  render () {
   return ( 
      <div className="product-catalogue__pagination">
        <div className="page-nav-wrapper">
          { this.props.curpage > 1 ? <div className="angle-back"><a onClick={this.prevPage}></a></div> : ''}
          <ul>
              { this.props.pages ? Array(this.props.pages).fill(null).map( (x,i) => i+1 ).map((item, idx) =>             
                <li className={ this.props.curpage === idx+1 ? 'active' : null} key={idx} ><a onClick={this.changePage}>{idx+1}</a></li>
                ) : '' } 
          </ul>
          { this.props.curpage < this.props.pages ? <div className="angle-forward"><a onClick={this.nextPage}></a></div> : ''}
        </div>
      </div> 
    )
 }

}


export default Pager;