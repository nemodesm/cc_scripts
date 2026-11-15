--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local listeners = {}
____exports.eventManager = {}
local eventManager = ____exports.eventManager
do
    function eventManager.addListener(self, event, listener)
        if listeners[event] == nil then
            listeners[event] = {listener}
        else
            local ____listeners_event_0 = listeners[event]
            ____listeners_event_0[#____listeners_event_0 + 1] = listener
        end
    end
    function eventManager.beginListener(self)
        while true do
            local name, a, b, c = os.pullEvent()
            if listeners[name] ~= nil then
                for ____, listener in ipairs(listeners[name]) do
                    listener(
                        nil,
                        name,
                        a,
                        b,
                        c
                    )
                end
            end
        end
    end
    function eventManager.waitForEvent(self, event)
        while true do
            local name, a, b, c = os.pullEvent()
            if listeners[name] ~= nil then
                for ____, listener in ipairs(listeners[name]) do
                    listener(
                        nil,
                        name,
                        a,
                        b,
                        c
                    )
                end
            end
            if name == event then
                return {name, a, b, c}
            end
        end
    end
end
return ____exports
