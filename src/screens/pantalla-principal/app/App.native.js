import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Menu, Bell, Home, Mail, PlusCircle, CreditCard } from 'lucide-react-native';

function PantallaPrincipalApp({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Menu size={24} />
        </TouchableOpacity>
        <View style={styles.logoBox}>
          {/* Espacio para logo SubastUp */}
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Subastas Especiales */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subastas Especiales</Text>
          <View style={styles.imageBox}>
            {/* Espacio para imagen de fondo */}
            <TouchableOpacity style={styles.verMasButton}>
              <Text style={styles.verMasText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Subastas Comunes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subastas Comunes</Text>
          <View style={styles.imageBox}>
            {/* Espacio para imagen de fondo */}
            <TouchableOpacity style={styles.verMasButton}>
              <Text style={styles.verMasText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionImageBox} />
            <Text style={styles.actionLabel}>Metodo de Pago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionImageBox} />
            <Text style={styles.actionLabel}>Información</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionImageBox} />
            <Text style={styles.actionLabel}>Calendario</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Home size={24} />
          <Text style={styles.bottomNavLabel}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Mail size={24} />
          <Text style={styles.bottomNavLabel}>Mensajes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <PlusCircle size={24} />
          <Text style={styles.bottomNavLabel}>Crear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <CreditCard size={24} />
          <Text style={styles.bottomNavLabel}>Pagos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', position: 'relative' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#fff' },
  iconButton: { padding: 8 },
  logoBox: { height: 40, width: 128, backgroundColor: '#e5e7eb', borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  notificationDot: { position: 'absolute', top: 4, right: 4, width: 8, height: 8, backgroundColor: '#000', borderRadius: 4 },
  mainContent: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 96 },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 18, marginBottom: 8, color: '#1f2937', fontWeight: '500' },
  imageBox: { height: 192, backgroundColor: '#e5e7eb', borderRadius: 24, overflow: 'hidden', justifyContent: 'flex-end', alignItems: 'flex-end' },
  verMasButton: { backgroundColor: '#991b1b', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 12, margin: 16 },
  verMasText: { color: '#fff', fontSize: 16, fontWeight: '500' },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  actionButton: { flex: 1, alignItems: 'center', marginHorizontal: 8 },
  actionImageBox: { width: 96, height: 96, backgroundColor: '#e5e7eb', borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  actionLabel: { fontSize: 14, color: '#1f2937', textAlign: 'center' },
  bottomNav: { position: 'absolute', left: 16, right: 16, bottom: 16, backgroundColor: '#fff', borderRadius: 24, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, elevation: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 12, paddingHorizontal: 8 },
  bottomNavButton: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  bottomNavLabel: { fontSize: 12, color: '#6b7280', marginTop: 2 },
});

export default PantallaPrincipalApp;
