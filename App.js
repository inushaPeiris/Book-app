import * as React from 'react';
import { Button, View, Text, TextInput, FlatList, TouchableOpacity, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({ navigation }) {
  return (
    <View>
      <h1 style={{ textAlign: 'center', marginBottom: 100 }}>Welcome</h1>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{ height: 40, width: 250, margin: 12, borderWidth: 1, padding: 10, }} placeholder='Enter username'/>
        <TextInput style={{ height: 40, width: 250, margin: 12, borderWidth: 1, padding: 10, marginBottom: 30 }} placeholder='Enter password'/>

        <Button title="Sing in" onPress={() => navigation.navigate('BookList')}/>
        <h2>or</h2>
        <Button title="Sing up" onPress={() => navigation.navigate('Register')}/>
      </View>
    </View>
  );
}

function RegisterScreen({navigation}) {
  return (
    <View>
      <h1 style={{ textAlign: 'center', marginBottom: 60 }}>Join with Us</h1>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{ height: 40, width: 250, margin: 12, borderWidth: 1, padding: 10, marginBottom: 30 }} placeholder='Enter name'/>
        <TextInput style={{ height: 40, width: 250, margin: 12, borderWidth: 1, padding: 10, marginBottom: 30 }} placeholder='Enter e-mail'/>
        <TextInput style={{ height: 40, width: 250, margin: 12, borderWidth: 1, padding: 10, marginBottom: 30 }} placeholder='Enter password'/>
        <TextInput style={{ height: 40, width: 250, margin: 12, borderWidth: 1, padding: 10, marginBottom: 30 }} placeholder='Enter phone'/>

        <Button title="Register" onPress={() => navigation.navigate('Login')}/>
      </View>
    </View>
  );
}

function BookListScreen({navigation}){
  return (
    <View style={{flex: 1,}}>
      <View style={{marginHorizontal:100, width: 150, marginBottom: 30}}>
       <Button title="Sort by category" />   
      </View>


      <ScrollView style={{flex: 1,}}>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Jeni</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Invisible</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Beloved</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Things Fall Apart</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Jane Eyre</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        The Guns of August</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        The Liberation Trilogy</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        1491</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        The Crusades</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Caesar and Christ</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        The Echo Wife</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Snow Crash</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        The Exponential Age</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        The Moon</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Life 3.0</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Steve Jobs</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Solaris</Text>
        <Text style={{marginLeft: 0, padding: 8, width:'100%'}} onPress={() => navigation.navigate('Book Details')}>
        Bad Blood</Text>
      </ScrollView>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', backgroundColor:"white"}}>
        <TouchableOpacity style={{alignItems:"center",backgroundColor:"white",padding:10,margin:8}} onPress={()=>navigation.navigate('Category')}>
          <Image style={{width:25, height:25,}} 
          source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: "center",padding:10, backgroundColor:"white"}} onPress={()=>navigation.navigate('BookList')}>
          <Image style={{width:25, height:25}} 
            source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: "center", padding:10, backgroundColor:"white"}} onPress={()=>navigation.navigate('Search Book')}>
          <Image style={{width:25, height:25}} 
              source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
          />
        </TouchableOpacity>
      </View>

    </View>
  );

}
function CategoryScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'space-between'}}>
      <View style={{flex:1,justifyContent:'flex-start',}}>
        <Text style={{backgroundColor:'#34a4eb', marginTop:0, color: 'white', width: '100%', padding: 30, textAlign: 'center', fontSize: 25}}
        >NOVELS</Text>

        <Text style={{backgroundColor:'#34a4eb', marginTop: 4, color: 'white', width: '100%', padding: 30, textAlign: 'center', fontSize: 25}}
        >SCIENCE FICTION</Text>

        <Text style={{backgroundColor:'#34a4eb', marginTop: 4, color: 'white', width: '100%', padding: 30, textAlign: 'center', fontSize: 25}}
        >HISTORICAL</Text>

        <Text style={{backgroundColor:'#34a4eb', marginTop: 4, color: 'white', width: '100%', padding: 30, textAlign: 'center', fontSize: 25}}
        >TECHNOLOGY</Text>
      </View>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', backgroundColor:"white"}}>
        <TouchableOpacity style={{alignItems:"center",backgroundColor:"white",padding:10,margin:8}} onPress={()=>navigation.navigate('Category')}>
          <Image style={{width:25, height:25,}} 
          source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: "center",padding:10, backgroundColor:"white"}} onPress={()=>navigation.navigate('BookList')}>
          <Image style={{width:25, height:25}} 
            source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: "center", padding:10, backgroundColor:"white"}} onPress={()=>navigation.navigate('Search Book')}>
          <Image style={{width:25, height:25}} 
              source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
          />
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

function SearchBookScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'space-between'}}>
      <View style={{alignItems:'center'}}>
        <h2>Search a Book</h2>
        
        <TextInput style={{ height: 40, width: 250, margin: 12, borderWidth: 1, padding: 10, marginTop: 50, marginBottom: 30 }} placeholder='Enter the book name'/>

        <Button title="Search"/>
      </View>

      <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around', backgroundColor:"white"}}>
        <TouchableOpacity style={{alignItems:"center",backgroundColor:"white",padding:10,margin:8}} onPress={()=>navigation.navigate('Category')}>
          <Image style={{width:25, height:25,}} 
          source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: "center",padding:10, backgroundColor:"white"}} onPress={()=>navigation.navigate('BookList')}>
          <Image style={{width:25, height:25}} 
            source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: "center", padding:10, backgroundColor:"white"}} onPress={()=>navigation.navigate('Search Book')}>
          <Image style={{width:25, height:25}} 
              source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

// book details screens
function BookDetailsScreen({navigation}){
  return(
    <View style={{alignItems:'center',backgroundColor:'white'}}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Jane Eyre</Text>
      <Image style={{width:200, height:350, marginTop:20}} 
              source={{uri:'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781416500247_9781416500247_hr.jpg'}}
          />
      <Text style={{fontSize:18, marginTop: 20}}>Author: Charlotte Brontë</Text>
      <Text style={{fontSize:18, marginTop: 20}}>Price: LKR 800.00</Text>
      <Text style={{fontSize:18, marginTop: 20}}>Description:</Text>
      
      <Text style={{fontSize:12, margin: 10, marginHorizontal: 30, textAlign:'center',marginBottom: 40, }}>
      Jane Eyre (/ɛər/ AIR; originally published as Jane Eyre: An Autobiography) is a novel by English writer Charlotte Brontë, published under the pen name "Currer Bell", on 16 October 1847, by Smith, Elder & Co. of London. The first American edition was published the following year by Harper & Brothers of New York.[1] Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.[2]The novel revolutionised prose fiction by being the first to focus on its protagonist's moral and spiritual development through an intimate first-person narrative, where actions and events are coloured by a psychological intensity. Charlotte Brontë has been called the "first historian of the private consciousness", and the literary ancestor of writers like Proust and Joyce.[3]
      </Text>
        
    </View>
  )
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="BookList" component={BookListScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Search Book" component={SearchBookScreen} />
        <Stack.Screen name="Book Details" component={BookDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
