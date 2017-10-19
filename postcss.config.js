/**
 * Created by devollove9 on 2017/10/1.
 */


module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['Android 2.3',
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 8',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6']
        })
    ]
}