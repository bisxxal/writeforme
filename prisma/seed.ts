
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();


const portraitUrls = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1513451713350-dee890297c4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1200"
  // (You can add more unique URLs similarly)
];

async function main() {
 
  const samplePhotos = [];

  for (let i = 1; i <= 20; i++) {
    const gender = i % 2 === 0 ? 'women' : 'men';
    samplePhotos.push(`https://randomuser.me/api/portraits/${gender}/${i}.jpg`);
  }

  for (let i = 0; i < 20; i++) {

    const userPhotos = portraitUrls.slice(i * 3, i * 3 + 3);

    const user = await prisma.user.create({
      data: {
        name: `${faker.person.firstName()}_${i}`,
        email: faker.internet.email(),
        image: samplePhotos[i],

        isSellerModeActive:true,
        description: faker.lorem.paragraph(),
        pagePrice: faker.number.int({ min: 5, max: 20 }),
        digramsPrice: faker.number.int({ min: 5, max: 20 }),

        showsCasePhotos: userPhotos

      },
    });

    console.log(`Created user with ID: ${user.name}`);
 
  }
  
}

main()
  .then(() => {
    console.log('Seeding complete!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error('Error while seeding:', e);
    return prisma.$disconnect();
  });

