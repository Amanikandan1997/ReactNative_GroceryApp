import React, { useState } from 'react';
import { Alert, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { veg } from './Data';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = ({ route }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation();

    const handleBuyNow = (item) => {
        setSelectedProduct(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleBuyNowPress = () => {
        setModalVisible(false);
        navigation.navigate('ViewScreen'); // Navigate to the desired screen
    };

    return (
        <View style={{ paddingRight: 13, paddingVertical: 5 }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={veg}
                renderItem={({ item, index }) => (
                    <View style={{
                        height: responsiveHeight(25),
                        borderWidth: 2,
                        borderColor: "#E3E3E3",
                        width: responsiveWidth(30),
                        marginRight: 5,
                        borderRadius: 15,
                        alignItems: 'center',
                        padding: 10,
                    }}>
                        <Image style={{ height: 70, width: 100 }} source={{ uri: item.img }} />
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.name}</Text>
                            <Text>{item.pieces}</Text>
                        </View>
                        <Text style={{ fontSize: 18 }}>₹{item.price}</Text>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'green' }]}
                            onPress={() => handleBuyNow(item)}>
                            <Text style={styles.buttonText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image style={{ height: 100, width: 150 }} source={{ uri: selectedProduct?.img }} />
                        <Text>Name: {selectedProduct?.name}</Text>
                        <Text>Price: ₹{selectedProduct?.price * quantity}</Text>
                        <Text>Quantity: {quantity}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={decrementQuantity} style={[styles.button, { backgroundColor: 'orange' }]}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={incrementQuantity} style={[styles.button, { backgroundColor: 'orange' }]}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={closeModal} style={[styles.button, { backgroundColor: 'red' }]}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleBuyNowPress} style={[styles.button, { backgroundColor: 'green' }]}>
                            <Text style={styles.buttonText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ProductScreen;

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});
