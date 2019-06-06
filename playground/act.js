const normal = {
    base: 'normal_base',
    push20: 'normal_push20',
    qrderfulfillment: 'qrderfulfillment',
    flightbanner: 'normal_flightbanner',
};

class ActivityConfig {
    static ACTIVITY_AB_EXPID = {
        'all-all-all': '190401_fi_jr_nqhad',
    }

    static ACTIVITY_TPL = {
        // clients, scene, mktype
        'qunar-all-q_homepage': [normal.base],
        'qunar-all-ucenter': [normal.base],
        'qunar-all-push20': [normal.base, normal.push20],
        'qunar-all-qrder_fulfillment': [normal.base, normal.qrderfulfillment],
        'quanr-all-flight_banner': [normal.base, normal.flightbanner]
    };

    static getActivityConfig = async ({clientSource = 'all', scene = 'all', mktype = 'all'}) => {
        const source = `${clientSource}-${scene}-${mktype}`;
        const expid = this.ACTIVITY_AB_EXPID;
        return expid
        const tplfile = this.ACTIVITY_TPL[source];
        const tpl = await import(tplfile);

        return { tpl, expid };
    };
}


ActivityConfig.getActivityConfig({clientSource = 'qunar', scene = 'all', mktype = 'all'})