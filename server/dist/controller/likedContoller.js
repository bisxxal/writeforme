export const setLiked = async (req, res) => {
    try {
        //  const user = await prisma.user.create({
        //   data:{
        //     name:"saurabh",
        //     email : "bisxx@"
        //   }
        //  })
        //  console.log(user)
        return res.json({ success: true, message: "liked" });
    }
    catch (error) {
        console.log("error in addtoCartController =>>>>", error);
        return res.json({ success: false, message: "error" });
    }
};
