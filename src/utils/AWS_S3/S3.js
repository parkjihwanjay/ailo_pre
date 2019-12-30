import axios from 'axios';

function aws_config() {
	AWS.config.update({
		region: process.env.VUE_APP_BUCKETREGION,
		credentials: new AWS.CognitoIdentityCredentials({
			IdentityPoolId: process.env.VUE_APP_IDENTITYPOOLID,
		}),
	});
}

function new_s3() {
	return new AWS.S3({
		apiVersion: '2006-03-01',
		params: { Bucket: process.env.VUE_APP_ALBUMBUCKETNAME },
	});
}

function s3_upload({ s3, file, photoKey, id, img }) {
	s3.upload(
		{
			Bucket: process.env.VUE_APP_ALBUMBUCKETNAME,
			Key: photoKey,
			Body: file,
			ACL: 'public-read',
			contentType: 'application/pdf',
		},
		async (err, response) => {
			if (err) {
				return alert(err.message);
			}
			try {
				const url = response.Location;
				console.log(url);
				await axios({
					method: 'post',
					url: `/pre/diary/${id}/files`,
					data: {
						url,
						img,
					},
				});
			} catch (e) {
				console.log(e);
			}
			// console.log(response.Location);
			// alert('성공적');
		},
	);
}

export { aws_config, new_s3, s3_upload };
