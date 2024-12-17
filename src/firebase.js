import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2VUMeyJDEQgtzQ2W7s2eaoJ_rKJeIDYQ",
    authDomain: "store-5dd06.firebaseapp.com",
    databaseURL: "https://store-5dd06-default-rtdb.firebaseio.com",
    projectId: "store-5dd06",
    storageBucket: "store-5dd06.firebasestorage.app",
    messagingSenderId: "541264326332",
    appId: "1:541264326332:web:6d4ea381206cc3b19eeab9",
    measurementId: "G-K9FXNKNCHP"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// دالة للحصول على البيانات من Firestore
async function getData() {
    const querySnapshot = await getDocs(collection(db, "your_collection_name"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}

// دالة لإضافة البيانات إلى Firestore
async function addData() {
    const docRef = await addDoc(collection(db, "your_collection_name"), {
        name: "New Product",
        price: 100,
        inStock: true
    });
    console.log("Document written with ID: ", docRef.id);
}

export { getData, addData };
