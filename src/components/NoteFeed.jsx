import { Button, FlatList, Text, View } from "react-native";
import { Note } from "./Note";
import { Separator } from "./Separator";

const listNote = [
    {id:0, content: 'll124124l'},
    {id:2, content: '214124124'},
    {id:3, content: '12412412'},
    {id:4, content: '332131'},
    {id:5, content: '412412412'},
    {id:6, content: '125125'},
    {id:7, content: 'l4363476374ll'},
    {id:8, content: 'l43qw dqdw6347qwd qdqwd 6374ll'},
    {id:9, content: 'wqdqdqwd'},
    {id:10, content: 'l436q wdq w3476374ll'},
];
export function NoteFeed({children, nav}){
return(  
    <View >
        <FlatList 
        ItemSeparatorComponent={()=><Separator />}
        data={listNote}
        keyExtractor={({id})=>id.toString()}
        renderItem={({item})=><Note note={item}/>}/>
    </View>
)}