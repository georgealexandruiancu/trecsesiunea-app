/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Alert, Modal, ScrollView, StatusBar, Share} from 'react-native';
import Emoji from 'react-native-emoji';
import {AdMobBanner} from 'react-native-admob';

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = { 
    
      name: '', 
      exam: '',
      random: 0,
      modalVisible: false,
      alertModal: false,
      arr: [
        "Mai bine dădeai la ASE",
        "E ok si cu 5",
        "Restanta e restanta, restanta se plateste!",
        "Da, o sa obtii o nota buna",
        "Desigur ca da, o sa iei nota 10.",
        "Nu!",
        "Nu are rost sa te duci !?",
        "Da!",
        "Desigur!",
        "Nu te descuraja! Poti sa il iei!",
        "Posibil un 6-7?",
        "Merge si copiat!",
        "Ramai la zacusca =))",
        "Cere ajutor la un coleg!",
        "Ai sanse foarte mari de nota 10",
        "Ai sanse sa il promovezi cu bine",
        "4,5. pacaleste profesorul",
        "Nu pica subiecte bune",
        "Nu da lucrarea, e mai bine",
        "Da, desigur",
        "Ai incredere in tine ca poti!",
        "Intreaba un prieten",
        "Trebuie sa aduci flori la profesor",
        "Pune o lumanare",
        "Biserica e aproape pentru rugaciune",
        "Vorbeste cu Nea Dani sa puna un acatist",
        "Nu e problema, un an se mai pica",
        "E posibil sa iei 9, trebuie sa dai o bere",
        "Te ajuta un coleg, trebuie sa dai o bere",
        "Poti sa treci anul si cu restanta asta",
        "Ajuta si vei fi ajutat",
        "Sfatul este sa NU copiezi",
        "Te prinde cand copiezi, ai grija!",
      ],
      emoji: [
        "sweat",
        "smiling_imp",
        "moneybag",
        "heart",
        "sparkles",
        "bomb",
        "thinking_face",
        "star",
        "raised_hands",
        "slightly_smiling_face",
        "handshake",
        "white_check_mark",
        "tomato",
        "ok_hand",
        "heartbeat",
        "heartbeat",
        "smiling_imp",
        "pensive",
        "sob",
        "stuck_out_tongue",
        "kissing_heart",
        "pray",
        "rose",
        "candle",
        "church",
        "church",
        "arrow_left",
        "beer",
        "beers",
        "+1",
        "wave",
        "tongue",
        "eye",
      ]
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  setAlertVisible(visible) {
    this.setState({ alertModal: visible });
  }
  makeRandom(){
    this.setState({ random: Math.floor(Math.random() * this.state.arr.length)})
  }
  _shareContent(){
      Share.share({
       
        message: "Aplicatia 'Trec sesiunea?' mi-a prezis pentru examenul " + this.state.exam + ": " + this.state.arr[this.state.random] +" ------ vezi si examenul tau, descarca aplicatia: https://www.facebook.com/Trec-Sesiunea--249141309318439/",
  
      })
  }
  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent).then(
      function (canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      }
    ).then(
      function (result) {
        if (result.isCancelled) {
          alert('Share cancelled');
        } else {
          alert('Share success with postId: ' + result.postId);
        }
      },
      function (error) {
        alert('Share fail with error: ' + error);
      }
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#9ae1d3"
          barStyle="light-content"
        />
        <Image
          style={{ width: 100, height: 100, marginBottom: 75, marginTop: 75, alignSelf: 'center'  }}
          source={require('./assets/logoPNG.png')}
        />
        <Text style={styles.welcome}>Trec Sesiunea ?</Text>
        <Text style={styles.instructions}>Numele meu este:</Text>
        <TextInput
          style={{ height: 40, width: 70 + "%", borderBottomColor: '#f9545b', borderBottomWidth: 2, padding: 10, textAlign: "center", fontSize: 20, color: "#0e4675", alignSelf: 'center' }}
          placeholder="Numele tau.."
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <Text style={styles.instructions}>și vreau să aflu</Text>
        <Text style={styles.instructions}>dacă trec examenul:</Text>
        <TextInput
          style={{
            height: 40, width: 70 + "%", borderBottomColor: '#f9545b', borderBottomWidth: 2, padding: 10, textAlign: "center", fontSize: 20, color: "#0e4675", alignSelf: 'center'  }}
          placeholder="Examenul tau.."
          onChangeText={(exam) => this.setState({ exam })}
          value={this.state.exam}
        />

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{ backgroundColor: "#0e4675", flex: 1, alignItems: 'center', justifyContent: "center"  }}>
            <View style={{ padding: 50, textAlign: "center", backgroundColor: "#0e4675", alignItems: 'center', justifyContent: "center" }}>
              <View>
                <Text style={styles.textAns}>Salut, <Text style={styles.nameExam}>{this.state.name} </Text>!</Text>
                <Text style={styles.textAns}>"Trec Sesiunea ?"</Text>
                <Text style={styles.textAns}> a prezis pentru examenul <Text style={styles.nameExam}>{this.state.exam}</Text></Text>
                <Text style={styles.prezicere}>"{this.state.arr[this.state.random]}"</Text>
                <Emoji name={this.state.emoji[this.state.random]} style={{ fontSize: 100, textAlign: "center", alignSelf:'center' }} />

                <TouchableHighlight
                  style={styles.openModalContainer2}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    this.setState({exam: ""})
                  }}>
                  <Text style={styles.openModalText3}>Reincearca !</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.openModalContainer2}
                  onPress={() => {
                    this._shareContent()
                  }}>
                  <Text style={styles.openModalText3}>Share !</Text>
                </TouchableHighlight>
               
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.alertModal}
          onRequestClose={() => {
            this.setAlertVisible(!this.state.alertModal);
          }}
          presentationStyle="overFullScreen"
          >
          <View style={{backgroundColor: "rgba(0,0,0,0.5)", flex: 1,}}>
          <View style={{padding: 50, textAlign: "center", backgroundColor: "#f9545b" }}>
            <View>
                <Text style={styles.openModalText2}>Te rugam sa introduci datele!</Text>

              <TouchableHighlight
                style={styles.openModalContainer}
                onPress={() => {
                  this.setAlertVisible(!this.state.alertModal);
                }}>
                  <Text style={styles.openModalText}>Ok!</Text>
              </TouchableHighlight>
            </View>
          </View>
          </View>
        </Modal>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-6502640877470603/1699361181"
          testDevices={[AdMobBanner.simulatorId]}
        />

        <TouchableHighlight
          onPress={() => {
            if(this.state.exam!== "" && this.state.name!= ""){
              this.setModalVisible(true);
              this.makeRandom();
            }else{
              this.setAlertVisible(true);
            }
          }}
          style={styles.openModalContainer}
          >
          <Text style={styles.openModalText}>Trec examenul ?</Text>
        </TouchableHighlight>
        
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#9ae1d3',
  },
  welcome: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: 'center',
    margin: 10,
    color: "#f9545b",
  },
  instructions: {
    fontSize: 23,
    fontWeight: "900",
    textAlign: 'center',
    marginBottom: 10,
    color: "#0e4675"
  },
  openModalContainer:{
    backgroundColor: '#0e4675',
    padding: 10,
    marginTop: 20,
    width: 60+"%",
    borderRadius: 20,
    height: 50,
    alignSelf: 'center'
  },
  openModalContainer2: {
    backgroundColor: '#9ae1d3',
    padding: 10,
    marginTop: 20,
    width: 150,
    borderRadius: 20,
    height: 50,
    alignSelf: 'center'
  },
  openModalText:{
    textAlign: 'center',
    color: '#9ae1d3',
    marginTop: 5,
    fontWeight: '900',
    fontSize: 20
  }, 
  textAns:{
    textAlign: 'center',
    color: '#9ae1d3',
    marginTop: 5,
    fontWeight: '900',
    fontSize: 23
  },
  openModalText3: {
    textAlign: 'center',
    color: '#0e4675',
    marginTop: 5,
    fontWeight: '900',
    fontSize: 20
  }, 
   openModalText2: {
    textAlign: 'center',
     color: '#0e4675',
    marginTop: 5,
    fontWeight: '900',
    fontSize: 20
  },
  prezicere:{
    textAlign: 'center',
    color: '#f9545b',
    marginTop: 20,
    fontWeight: '900',
    fontSize: 25,
    fontStyle: 'italic',
    letterSpacing: 1
  },
  nameExam: {
    alignItems: 'flex-start',
    color: '#f9545b',
    marginTop: 5,
    fontWeight: '900',
    fontSize: 23
  }
});
