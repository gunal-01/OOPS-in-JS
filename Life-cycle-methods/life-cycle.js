class Component {
    constructor() {
      
    }
    
    componentDidMount() {
      console.log('CDM')
      
    }
    
    componentDidUpdate() {
      console.log('CDU')
      
    } 
    
    componentWillUnmount() {
      console.log('CWU')
      
    }
  }
  
  class Forms extends Component {
    constructor() {
      super()
      this.x = 1;
    }
    
    componentDidMount() {
      console.log('F > CDM')
    }
    
    render() {
      console.log('Paint on the screen!')
    }
  }
  
  let f1 = new Forms()
  console.log(f1);
  
  // f1 -> { render: fn, componentDidMount } -> { componentDidMount, componentDidUpdate, componentWillUnmount }
  f1.render()
  f1.componentDidMount()
  f1.componentDidUpdate()
  f1.componentWillUnmount()