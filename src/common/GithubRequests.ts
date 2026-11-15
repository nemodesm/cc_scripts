const base_api_url =
    'https://api.github.com/repos/nemodesm/cc_scripts/contents/';

export namespace GithubRequests {
    export function getDirectory(dir: string):
        | {
              name: string;
              path: string;
              sha: string;
              size: number;
              url: string;
              html_url: string;
              git_url: string;
              download_url: string;
              type: 'file' | 'dir';
              _links: { self: string; git: string; html: string };
          }[]
        | null {
        let [httpRequest, err, res] = http.get(base_api_url + dir);

        if ((<http.Response>httpRequest).getResponseCode != undefined) {
            const response = textutils.unserialiseJSON(
                (<http.Response>httpRequest).readAll()!
            ) as {
                name: string;
                path: string;
                sha: string;
                size: number;
                url: string;
                html_url: string;
                git_url: string;
                download_url: string;
                type: 'file' | 'dir';
                _links: { self: string; git: string; html: string };
            }[];

            return response;
        } else {
            if (res != null) {
                let code = res.getResponseCode();

                for (const { k, v } of res.getResponseHeaders()) {
                    print(k, v);
                }
            }
        }

        return null;
    }
}
