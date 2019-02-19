import React, {Component} from 'react';
import { View, StyleSheet, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window')

class Switch extends React.Component {
    
    constructor(props) {
        super(props);
        this.switch = this.switch.bind(this);
    }

    state = {
        containerWidth: 0,
        section: 0,
        translateAnim: new Animated.Value(0),
    }

    switch(section) {        
        console.log('switched: ' + section)
        this.setState({
            section: section
        })
        
        Animated.timing(                  
            this.state.translateAnim,
            {
              toValue: (section === 0 ? 0 : this.state.containerWidth/2),
              duration: 200,
            }
          ).start(() => {
            this.props.switch && this.props.switched(section)
          });                        
    }

    render() {
              
        const {first, second} = this.props;
        
        return (
            <View 
                style={[styles.mainContainer, {...this.props.style}]}
                onLayout={(event) => {
                    this.setState({
                        containerWidth: event.nativeEvent.layout.width
                    })
                }}
                >                
                <Animated.View                     
                    style={{
                        backgroundColor: 'transparent',
                        width: '50%',
                        height: '100%',              
                        transform: [{
                            translateX: this.state.translateAnim,
                          }
                        ],
                    }}
                > 
                    <LinearGradient 
                        start={[0, 1]} 
                        end={[1, 0]}
                        colors={['#6857a9', '#4b3985']}
                        style={{
                            width: '100%', 
                            height: '100%', 
                            borderRadius: 10000                            
                        }}
                    />
                </Animated.View>

                <View style={styles.titleContainer}>
                    <TouchableOpacity style={styles.title} onPress={() => this.switch(0)}>
                        <Text style={{textAlign: 'center', fontSize: 16, color: this.state.section === 0 ? 'white': '#aaaaaa'}}>{first}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.title} onPress={() => this.switch(1)}>
                        <Text style={{textAlign: 'center', fontSize: 16, color: this.state.section !== 0 ? 'white': '#aaaaaa'}}>{second}</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 46,
        width: width*0.9,        
        backgroundColor: 'white',
        flexDirection: 'column',
        margin: 5,        
        borderRadius: 1000,
        shadowColor: '#6857a9',
        shadowRadius: 4,
        shadowOpacity: 0.9,
        shadowOffset: {width: 2, height: 2}
    },
    titleContainer: {
        height: '100%',
        width: '100%',        
        position: 'absolute',                
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    title: {
        flex: 1                
    }


})

export default Switch;
