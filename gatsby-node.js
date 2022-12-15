const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getAllSlugs {
      allContentfulFlowerProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allContentfulFlowerProduct.edges.forEach((edge) => {
    actions.createPage({
      //URL
      path: "/product/" + edge.node.slug,
      //Template
      component: path.resolve("./src/pages/singleProduct.jsx"),
      context: { slug: edge.node.slug },
    });
  });
};
