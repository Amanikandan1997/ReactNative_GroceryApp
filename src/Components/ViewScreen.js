import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


const ViewScreen = () => {
  const [shippingAddress, setShippingAddress] = useState({
    flatNo: '',
    address1: '',
    address2: '',
    state: '',
    pin: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiProvider, setUpiProvider] = useState('Google Pay');
  const [upiId, setUpiId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePayment = () => {
    // Handle payment logic
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Flat No."
            value={shippingAddress.flatNo}
            onChangeText={(text) => setShippingAddress({ ...shippingAddress, flatNo: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Address Line 1"
            value={shippingAddress.address1}
            onChangeText={(text) => setShippingAddress({ ...shippingAddress, address1: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Address Line 2"
            value={shippingAddress.address2}
            onChangeText={(text) => setShippingAddress({ ...shippingAddress, address2: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            value={shippingAddress.state}
            onChangeText={(text) => setShippingAddress({ ...shippingAddress, state: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="PIN"
            value={shippingAddress.pin}
            onChangeText={(text) => setShippingAddress({ ...shippingAddress, pin: text })}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <TouchableOpacity style={[styles.paymentMethod, paymentMethod === 'card' && styles.selected]} onPress={() => setPaymentMethod('card')}>
            <Image source={{ uri: 'https://w7.pngwing.com/pngs/48/549/png-transparent-swipe-card-icon-credit-card-bank-card-debit-card-money-card-card-material-blue-text-rectangle-thumbnail.png' }} style={styles.paymentMethodIcon} />
            <Text style={styles.paymentMethodText}>Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.paymentMethod, paymentMethod === 'upi' && styles.selected]} onPress={() => setPaymentMethod('upi')}>
            <Image source={{ uri: 'https://w7.pngwing.com/pngs/795/596/png-transparent-logo-line-angle-brand-line-angle-triangle-logo-thumbnail.png' }} style={styles.paymentMethodIcon} />
            <Text style={styles.paymentMethodText}>UPI</Text>
          </TouchableOpacity>
        </View>
        {paymentMethod === 'card' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Card Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              value={cardNumber}
              onChangeText={setCardNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
            <TextInput
              style={styles.input}
              placeholder="CVV"
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        )}
        {paymentMethod === 'upi' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>UPI Payment</Text>
            <Picker
              selectedValue={upiProvider}
              style={styles.picker}
              onValueChange={(itemValue) => setUpiProvider(itemValue)}
            >
              <Picker.Item label="Google Pay" value="Google Pay" />
              
              <Picker.Item label="PhonePe" value="PhonePe" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Enter UPI ID"
              value={upiId}
              onChangeText={setUpiId}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        )}
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Payment Successful!</Text>
              <Image source={require("../../assets/dell.gif") } style={{width:90,height:90, borderRadius:12}}/>  
                            <Text style={styles.modalText}>Delivery Soon!</Text>

              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  paymentMethodIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  paymentMethodText: {
    fontSize: 16,
  },
  selected: {
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  payButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height:500,
   
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',

    height:200
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ViewScreen;
