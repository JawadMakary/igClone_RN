import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
// npm i react-native-elements
const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/like.png",
    likedImgUrl:
      "https://img.icons8.com/fluency-systems-regular/48/fa314a/like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/comments--v1.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/share.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/bookmark-ribbon--v1.png",
  },
];
export default function Post({ post }) {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <PostLikes post={post} />
        <Captions post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
}
const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.story} source={{ uri: post?.profile_picture }} />
      <Text style={{ color: "#fff", marginLeft: 5, fontWeight: "700" }}>
        {post?.user}
      </Text>
    </View>
    <Text style={{ color: "#fff", fontWeight: "900" }}> ...</Text>
  </View>
);
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post?.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[0]?.imageUrl}
      />
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[1]?.imageUrl}
      />
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[2]?.imageUrl}
      />
    </View>
    <View>
      <Icon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[3]?.imageUrl}
      />
    </View>
  </View>
);
const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);
const PostLikes = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "#fff", fontWeight: "700" }}>{post.likes} likes</Text>
  </View>
);
const Captions = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <Text style={{ color: "#fff" }}>
      <Text style={{ fontWeight: "600" }}>{post?.user}</Text>
      <Text> {post?.caption}</Text>
    </Text>
  </View>
);
const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 6 }}>
    {/*  if we have 0 comments it will work --> double negation --> !! */}
    {!!post?.comments?.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""}{" "}
        {post.comments.length > 1 ? post.comments.length : 1}
        {post.comments.length > 1 ? "  comments" : "comment"}
      </Text>
    )}
  </View>
);
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, i) => (
      <View key={i} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});
