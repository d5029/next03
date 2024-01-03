export default function Products({ params }) {
  console.log('params', params);
  return (<div>
    Product Category: {params.category}
  </div>);
}