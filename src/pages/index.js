import React from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NotFound from '@theme/NotFound';

export default function Home() {
    const { globalData } = useDocusaurusContext();

    const versions = globalData['docusaurus-plugin-content-docs']['default']['versions'];
    const latestVersion =  versions.filter(version => {
        if (version.isLast)
            return version;
    })
    const path = latestVersion[0]?.path ;

    return path ? <Redirect to={path}/>  : <NotFound />
}
