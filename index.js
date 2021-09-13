var forge = require('node-forge');
var fs = require('fs');

var p12b64 = fs.readFileSync('./keystore.p12', 'base64');
// decode p12 from base64
var p12Der = forge.util.decode64(p12b64);
// get p12 as ASN.1 object
var p12Asn1 = forge.asn1.fromDer(p12Der);
// decrypt p12 using non-strict parsing mode (resolves some ASN.1 parse errors)
var p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, 'password');

console.log('p12 contents:');
console.log(p12);
console.log('\n\n\n');
console.log('safeContents array mapped:');
p12.safeContents.map((p)=>{
  console.log(p)
});