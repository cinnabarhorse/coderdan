

export default ({ query: { id } }, res) => {

    var SibApiV3Sdk = require('sib-api-v3-sdk');
    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    console.log('client:', defaultClient)

    // Configure API key authorization: api-key
    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = 'YOUR_API_KEY';

    // Uncomment below two lines to configure authorization using: partner-key
    // var partnerKey = defaultClient.authentications['partner-key'];
    // partnerKey.apiKey = 'YOUR API KEY';

    var apiInstance = new SibApiV3Sdk.SMTPApi();

    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
        to: [{
            email: 'testmail@example.com',
            name: 'John Doe'
        }],
        templateId: 59,
        params: {
            name: 'John',
            surname: 'Doe'
        },
        headers: {
            'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        }
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {

        console.log('API called successfully. Returned data: ' + data);
        res.status(200).json(data)
    }, function (error) {
        console.error(error);
        res.status(400).json(error)
    });

    /*  var SibApiV3Sdk = require('sib-api-v3-typescript');
  
  
      // This example is for Typescript-node
  
      const key = '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'
  
  
      // This example is for Typescript-node
  
  
  
      var apiInstance = new SibApiV3Sdk.SendSmtpEmail()
  
      console.log('api instance:', apiInstance)
  
      // Configure API key authorization: api-key
  
      //@ts-ignore
      var apiKey = apiInstance.authentications['apiKey'];
      apiKey.apiKey = key
  
      // Configure API key authorization: partner-key
  
      //@ts-ignore
      var partnerKey = apiInstance.authentications['partnerKey'];
      partnerKey.apiKey = key
  
      var sendSmtpEmail = {
          to: [{
              email: 'testmail@example.com',
              name: 'John Doe'
          }],
          templateId: 59,
          params: {
              name: 'John',
              surname: 'Doe'
          },
          headers: {
              'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
          }
      };
  
  
      //@ts-ignore
      apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
          console.log('API called successfully. Returned data: ' + data);
          res.status(200).json(data)
      }, function (error) {
          console.error(error);
      });
  
  
      // User with id exists
      //  if (filtered.length > 0) {
      //   res.status(200).json(filtered[0])
      // } else {
      //    res.status(404).json({ message: `User with id: ${id} not found.` })
      //  }
      */
}

