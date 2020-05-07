import React , { Component } from 'react';
import { Grid , Button , Input , Item, Header } from 'semantic-ui-react';
import Layout from './components/Layout';


export default class App extends Component {

  //create constructor
    constructor(props){
      super(props);
      this.state = { userInput: '',list: [], }
    }


    changeUserInput(input){
      this.setState({ userInput: input });
    }

    addList(input){
      //create a new list for object
      const newList = {
        id: 1+ Math.random(),
        value: this.state.userInput.slice()
      };

      //pass the object
      const list = [...this.state.list];
      list.push(newList);
      //set the state
      this.setState({ list, userInput: "" });
    }

    deleteList(input){
      //initialise the new variable
      const list = [...this.state.list];
      //take the index by pass the unique id
      const index = list.indexOf(input)
      if (index !== -1){
        list.splice(index,1);
        this.setState({ list: list});
      }
    }


  render(){
    return(
      <Layout>

      <Grid centered columns={2}>
        <Grid.Column textAlign="center"  >
          <Header size="huge"> To Do List </Header>
          <Input
            type="text"
            value={this.state.userInput}
            onChange={ (e) => this.changeUserInput(e.target.value)}
            fluid
            style={{marginTop: '12px'}}
            >
            <input />
              <Button
                disabled={!this.state.userInput}
                onClick={() => this.addList(this.state.userInput)}
                primary
                >
                Create
              </Button>
          </Input>
      </Grid.Column>


    <Grid.Row>
      <Grid.Column>
        <Item.Group divided >
          {this.state.list.map(item =>
            <Item
              key={item.id}>
              {item.value}
                <Button
                  onClick={() => this.deleteList(item)}
                  negative
                  floated="right">
                  X
              </Button>
            </Item>)}
        </Item.Group>
      </Grid.Column>
    </Grid.Row>

</Grid>
</Layout>

  );
  }
}
