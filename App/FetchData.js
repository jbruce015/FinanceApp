const DataAPI = async () => {
    try {
      let data = await fetch(
 );
      let { values } = await data.json();
      let [, ...Data] = values.map((data) => data);
      return Data;
    } catch {
      console.log("Error");
    }
  };
  export default DataAPI;