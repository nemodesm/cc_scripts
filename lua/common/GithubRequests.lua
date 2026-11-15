--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local base_api_url = "https://api.github.com/repos/nemodesm/cc_scripts/contents/"
____exports.GithubRequests = {}
local GithubRequests = ____exports.GithubRequests
do
    function GithubRequests.getDirectory(self, dir)
        local httpRequest, err, res = http.get(base_api_url .. dir)
        if httpRequest.getResponseCode ~= nil then
            local response = textutils.unserialiseJSON(httpRequest:readAll())
            return response
        else
            if res ~= nil then
                local code = {res:getResponseCode()}
                for ____, ____value in ipairs(res:getResponseHeaders()) do
                    local k = ____value.k
                    local v = ____value.v
                    print(k, v)
                end
            end
        end
        return nil
    end
end
return ____exports
