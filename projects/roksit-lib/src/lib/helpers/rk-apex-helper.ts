import 'apexcharts';

export class RkApexHelper {
    private static livedCharts: { id: string, options: any, chart: ApexCharts }[] = [];

    public static render(id: string, options: any): void {
        const index = this.livedCharts.findIndex(c => c.id === id);

        if (index === -1) {
            const chart = new ApexCharts(
                document.querySelector(id),
                options
            );

            chart.render();
            this.livedCharts.push({ id, options, chart });
        } else {
            this.livedCharts[index].chart.updateOptions(options);
            this.livedCharts[index].options = options;
        }
    }

    public static destroryCharts(): void {
        this.livedCharts.forEach(c => c.chart.destroy());
        this.livedCharts = [];
    }
}
