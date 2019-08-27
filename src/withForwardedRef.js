// import React, { forwardRef } from 'react'

// const withForwardedRef = Comp => {
//   const handle = (props, ref) =>{

//   	console.log(props,ref,' here comes the props and ref');
//   	// let {itemsData, getItemValue} = props;
//   	// let newObj = {
//   	// 	itemsData,
//   	// 	getItemValue
//   	// }
//   	return <Comp {...props} forwardedRef={ref} />
//   }

//   const name = Comp.displayName || Comp.name
//   handle.displayName = `withForwardedRef(${name})`

//   return forwardRef(handle)
// }

// export default withForwardedRef

// export default function withForwardedRef(Component) {
//   class LogProps extends React.Component {
//     componentDidUpdate(prevProps) {
//       console.log('old props:', prevProps);
//       console.log('new props:', this.props);
//     }

//     render() {
//       const {forwardedRef} = this.props;

//       // Assign the custom prop "forwardedRef" as a ref
//       return <Component {this.props} ref={forwardedRef} />;
//     }
//   }

  
//   return React.forwardRef((props, ref) => {
//     return <LogProps {...props} forwardedRef={ref} />;
//   });
// }