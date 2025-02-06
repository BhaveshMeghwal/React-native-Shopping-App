import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container: {
     backgroundColor: '#fff',
     paddingVertical: 20,
     paddingHorizontal: 15,
   },
   headerContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginBottom: 20,
   },
   icon: {
     marginRight: 10,
   },
   location:{
    display:"flex",
    alignContent:"center",
    justifyContent:'center',
    flexDirection:"row"
   },
   locationText: {
     fontSize: 16,
     fontWeight: 'normal',
     color: '#333',
   },
   cartIconContainer: {
     backgroundColor: '#343434',
     padding: 10,
     borderRadius: 20,
   },
   header: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 20,
     color: '#333',
   },
   heroImage: {
     width: '100%', // Full width of the container
     height: 200, // Adjust the height as needed
     borderRadius: 15,
     marginBottom: 20,
   },
   section: {
     marginBottom: 20,
   },
   sectionTitle: {
     fontSize: 20,
     fontWeight: 400,
     marginBottom: 15,
     color: '#446761',
   },
   categoryContainer: {
    width:60,
     marginRight: 15,
     alignItems: 'center',
   },
   categoryImage: {
     width: 50,
     height: 50,
     borderRadius: 30,
     marginBottom: 10,
   },
   categoryName: {
    textAlign:'center',
     fontSize: 12,
     color: '#555',
   },
 });

export default styles;