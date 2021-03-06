import React, { useState, useEffect } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";
import firebase, { db } from "../../firebase";
// YUP
const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required("A url is required"),
  caption: yup.string().max(2200, "Caption has reached the max chars length"),
});
const PLACEHOLDER_IMG =
  "https://th.bing.com/th/id/R.bed7fe8f284e8affe44d3dd817bdb8f2?rik=pMJJqkdyZG46SA&riu=http%3a%2f%2fwww.jennybeaumont.com%2fwp-content%2fuploads%2f2015%2f03%2fplaceholder.gif&ehk=3wTSmgFAHjHh1cl9Ay9w%2bNOsyhgED387BWJVO7Il2KI%3d&risl=&pid=ImgRaw&r=0";
export default function FormikPostUploader({ navigation }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const getUsername = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );
    return unsubscribe;
  };
  useEffect(() => {
    getUsername();
  }, []);
  const uploadToFirebase = (imageUrl, caption) => {
    const unsubscribe = db
      .collection("users")
      .doc(firebase.auth().currentUser.email)
      .collection("posts")
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        owner_email: firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),

        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());
    return unsubscribe;
  };
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        uploadToFirebase(values.imageUrl, values.caption);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACEHOLDER_IMG,
              }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder="Write a caption"
                placeholderTextColor="gray"
                multiline={true}
                style={{ color: "#fff", fontSize: 19 }}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <View style={{ marginTop: 15 }}>
            <TextInput
              onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
              placeholder="Enter the image URL "
              placeholderTextColor="gray"
              style={{ color: "#fff", fontSize: 17 }}
              onChangeText={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
            />
          </View>
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <View style={{ marginTop: 20 }}>
            <Button
              color="transparent"
              onPress={handleSubmit}
              title={"Share"}
              disabled={!isValid}
            />
          </View>
        </>
      )}
    </Formik>
  );
}
