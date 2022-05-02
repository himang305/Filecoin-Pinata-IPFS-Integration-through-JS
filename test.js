
    var file = document.getElementById("nft").files[0];
    console.log(file);
    var formData = new FormData();
    formData.append('file', file );
    
    
    const testAuthentication = () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    return axios.post(url,
        formData,
        {
            headers: {
                'Content-Type': `multipart/form-data; boundary= ${formData._boundary}`,
                'pinata_api_key': '',
                'pinata_secret_api_key': ''
            }
        }
    ).then(function (response) {
       console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
};
