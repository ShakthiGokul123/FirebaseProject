import React,{Component} from 'react'
import {db} from '../Config'
import {Button,View,TextInput,Text} from 'react-native'
let itemsRef = db.ref('/items');
let addItem =(item)=>{
    db.ref('/items').push({
        itemInfo:item
    });
}

export default class Additem extends Component{
    constructor(props){
        super(props);
         this.state={
             itemInfo:'Hi',
             items:[]
         }
         this.handleChange = this.handleChange.bind(this);
         this.clickToAdd = this.clickToAdd.bind(this);
    }
    clickToAdd(){
       addItem(this.state.itemInfo);
    }
    handleChange(e){
      this.setState({itemInfo:e.nativeEvent.text})
    }
  componentDidMount(){
      itemsRef.on('value',snapshort=>{
          let data = snapshort.val();
          let items = Object.values(data);
          this.setState({items});
      });
  }  

render(){
        return(
            <View>
                <TextInput
                style={{height: 40, borderColor: 'red', borderWidth: 1,marginTop:100}}
                placeholder="Enter the input"
                onChange={this.handleChange}
                
                />
                <Button style={{width:250,}}
                    title="Button"
                    color="#841584"
                    onPress={this.clickToAdd}
                   
                    />
                    {this.state.items.map(x=>{
                        return <Text>
                            {x.itemInfo}
                        </Text>
                    })}
            </View>    
        )
    }
}