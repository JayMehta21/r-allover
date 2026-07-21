const About = (props) => {
  console.log(props);

  return (
    <div>
      <h1>About</h1>
      {props.children}
    </div>
  );
};

export default About;
