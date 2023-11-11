module.exports = {
    // ... outras configurações ...
  
    module: {
      rules: [
        // ... outras regras ...
  
        {
          test: /react-icons\/.*\/LICENSE/,
          use: 'file-loader',
        },
      ],
    },
  };