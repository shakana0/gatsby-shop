const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const flowerSlugs = await graphql(`
    query getAllSlugsFlower {
      allContentfulFlowerProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
   
  `);

  const staffSlugs = await graphql(`
  query getAllSlugsStaff {
    allContentfulStaffType {
      nodes {
        name
        role
        slug
        staffImg {
          filename
          url
        }
        moreInfo{
          raw
        }
      }
    }
  }
  `)


  flowerSlugs.data.allContentfulFlowerProduct.edges.forEach((edge) => {
    actions.createPage({
      //URL
      path: "/product/" + edge.node.slug,
      //Template
      component: path.resolve("./src/pages/singleProduct.jsx"),
      context: { slug: edge.node.slug },
    });
  });

  staffSlugs.data.allContentfulStaffType.nodes.forEach((node) => {
    actions.createPage({
      //URL
      path: "/staff/" + node.slug,
      //Template
      component: path.resolve("./src/pages/singleStaffPage.jsx"),
      context: { slug: node.slug },
    });
  });
};
